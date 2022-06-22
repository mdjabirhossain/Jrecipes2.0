import React, { useRef, useState } from "react";
import { Dimensions, TouchableHighlight, TouchableOpacity } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import {
  CarouselImageContainer,
  CarouselImage,
} from "../screens/recipe-details.styles";
import styles from "../screens/recipe-details.styles";

export const RecipeCarouselImage = ({ item }) => {
  return (
    <TouchableOpacity>
      <CarouselImageContainer>
        <CarouselImage source={{ uri: item }} />
      </CarouselImageContainer>
    </TouchableOpacity>
  );
};

export const RecipeCarousal = ({ item }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const { width: viewportWidth } = Dimensions.get("window");
  const slider1Ref = useRef();
  return (
    <>
      <Carousel
        ref={slider1Ref}
        data={item.photosArray}
        renderItem={({ item }) => <RecipeCarouselImage item={item} />}
        sliderWidth={viewportWidth}
        itemWidth={viewportWidth}
        activeSlideOffset={0.05}
        inactiveSlideScale={0.4}
        inactiveSlideOpacity={1}
        firstItem={0}
        loop={false}
        autoplay={false}
        autoplayDelay={500}
        autoplayInterval={3000}
        onSnapToItem={(index) => setActiveSlide(index)}
      />
      <Pagination
        dotsLength={item.photosArray.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.paginationContainer}
        dotColor="rgba(255, 255, 255, 0.92)"
        dotStyle={styles.paginationDot}
        inactiveDotColor="white"
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        carouselRef={slider1Ref.current}
        tappableDots={!!slider1Ref.current}
      />
    </>
  );
};
