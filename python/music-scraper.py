import requests
from bs4 import BeautifulSoup
import pandas as pd
import time

def get_musopen_data(url):
    # User-Agent 헤더 추가
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }

    # 데이터를 저장할 리스트
    data = []

    try:
        # 사이트에서 HTML을 가져옵니다
        response = requests.get(url, headers=headers)
        response.raise_for_status()  # HTTP 오류 체크
        
        # HTML을 BeautifulSoup 객체로 파싱합니다
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # 음악 목록이 있는 컨테이너를 찾습니다
        music_items = soup.find_all('div', class_='music-item')
        
        for item in music_items:
            # 제목과 작곡가 정보
            title_element = item.find('h4', class_='title')
            title = title_element.text.strip() if title_element else 'Untitled'
            
            composer_element = item.find('a', class_='composer')
            composer = composer_element.text.strip() if composer_element else 'Unknown'
            
            # 연주자 정보
            performer_element = item.find('div', class_='performer')
            performer = performer_element.text.strip() if performer_element else 'Unknown'
            
            # 악기 정보
            instruments_element = item.find('div', class_='instruments')
            instruments = instruments_element.text.strip() if instruments_element else 'No instruments info'
            
            # 길이 정보
            duration_element = item.find('span', class_='duration')
            duration = duration_element.text.strip() if duration_element else 'Unknown'
            
            # 라이선스 정보
            license_element = item.find('span', class_='license')
            license_info = license_element.text.strip() if license_element else 'Public Domain'
            
            # 링크 정보
            link_element = item.find('a', class_='title-link')
            link = 'https://musopen.org' + link_element['href'] if link_element and 'href' in link_element.attrs else '#'
            
            # 데이터를 리스트에 추가
            data.append([
                composer,
                title,
                performer,
                instruments,
                duration,
                license_info,
                link
            ])
            
            # 서버 부하를 줄이기 위한 짧은 대기
            time.sleep(0.1)
            
    except requests.RequestException as e:
        print(f"데이터 수집 중 오류 발생: {e}")
        return None

    return data

def main():
    url = 'https://musopen.org/music/?composer=johann-sebastian-bach&license=CC-PD'
    
    # 데이터 수집
    data = get_musopen_data(url)
    
    if data:
        # 수집한 데이터를 pandas DataFrame으로 변환
        df = pd.DataFrame(data, columns=[
            'Composer',
            'Title',
            'Performer',
            'Instruments',
            'Duration',
            'License',
            'Link'
        ])

        # DataFrame을 엑셀 파일로 저장
        output_file = 'musopen_music_data.xlsx'
        df.to_excel(output_file, index=False)
        print(f"엑셀 파일이 성공적으로 생성되었습니다: {output_file}")
        
        # 수집된 데이터 수를 출력
        print(f"총 {len(df)} 개의 곡이 수집되었습니다.")
    else:
        print("데이터 수집에 실패했습니다.")

if __name__ == "__main__":
    main()
