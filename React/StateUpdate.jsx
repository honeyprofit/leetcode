const [colors, setColors] = useState(['red', 'green', 'blue']);

const changeColor = () => {
  // Bad!  This directly changes the 'colors' state!
  colors[0] = 'orange';

  setColors(colors);
};
