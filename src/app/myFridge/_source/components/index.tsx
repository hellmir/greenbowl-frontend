import { EditIngredient } from "./editIngredient";
import SwiperContainer from "./swiper/SwiperContainer";
import { MyFridgeTabs } from "./tab";

const MyFridge = async () => {
  return (
    <SwiperContainer
      firstChild={<MyFridgeTabs />}
      secondChild={<EditIngredient />}
    ></SwiperContainer>
  );
};

export default MyFridge;
