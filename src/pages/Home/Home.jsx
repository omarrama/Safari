import { useState } from "react";
import Hero from "../../components/Hero/Hero";
import Services from "../../components/Services/Services";
import { tours } from "../../data";
import Tours from "../../components/Tours/Tours";
import Pagination from "../../components/Pagination/Pagination";
import Sorting from "../../components/Sorting/Sorting";
import Banner from "../../components/Banner/Banner";
import Newsletter from "../../components/Newsletter/Newsletter";

const Home = () => {
  const [sortType, setSortType] = useState("rated");
  const [currentPage, setCurrentPage] = useState(1);

  // sorting
  switch (sortType) {
    case "reviews":
      tours.sort(
        (a, b) => b.reviews.replace(",", "") - a.reviews.replace(",", "")
      );
      break;
    case "high":
      tours.sort((a, b) => b.priceFrom - a.priceFrom);
      break;
    case "low":
      tours.sort((a, b) => a.priceFrom - b.priceFrom);
      break;
    default:
      tours.sort((a, b) => b.rating - a.rating);
  }

  // pagination
  const TOURS_PER_PAGE = 6;
  const pages = Math.ceil(tours.length / TOURS_PER_PAGE);
  const startIndex = (currentPage - 1) * TOURS_PER_PAGE;
  const finishIndex = startIndex + TOURS_PER_PAGE;
  const tourList = tours.slice(startIndex, finishIndex);
  return (
    <main>
      <Hero />
      <Services />
      <Sorting tourCount={tours.length} setSortType={setSortType} />
      <Tours tours={tourList} />
      <Pagination
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <Banner />
      <Newsletter />
    </main>
  );
};

export default Home;
