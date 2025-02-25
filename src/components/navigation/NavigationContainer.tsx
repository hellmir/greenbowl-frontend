import NavigationItemList from "./ItemList";

const NavigationContainer = () => {
  return (
    <nav className="fixed w-full bg-foundation-secondary h-14 bottom-0 max-w-[37.5rem] z-20">
      <NavigationItemList />
    </nav>
  );
};

export default NavigationContainer;
