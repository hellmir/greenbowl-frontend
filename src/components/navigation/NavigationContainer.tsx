import NavigationItemList from "./ItemList";

const NavigationContainer = () => {
  return (
    <nav className="fixed h-14 bottom-0 max-w-[599px] w-full pl-4 pr-4">
      <NavigationItemList />
    </nav>
  );
};

export default NavigationContainer;
