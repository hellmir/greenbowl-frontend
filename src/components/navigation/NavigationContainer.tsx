import NavigationItemList from "./ItemList";

const NavigationContainer = () => {
  return (
    <nav className="fixed bg-foundation-secondary h-14 bottom-0 max-w-[37.5rem] w-full pl-4 pr-4 z-20">
      <NavigationItemList />
    </nav>
  );
};

export default NavigationContainer;
