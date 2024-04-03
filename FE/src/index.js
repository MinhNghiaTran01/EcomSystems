import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { CategoryBookProvider } from "./context/category/categoryBook";
import { CategoryClothesProvider } from "./context/category/categoryClothes";
import { CategoryMobileProvider } from "./context/category/categoryMobile";
import { LinkPathProvider } from "./context/link_path";
import { BookWithCategoryNameProvider } from "./context/Book/book_with_category_name";
import { SearchProvider } from "./context/search";
import { TitleProvider } from "./context/title";
// import {SelectProductsProvider} from "./context/category";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <TitleProvider>
      <SearchProvider>
        <BookWithCategoryNameProvider>
          <LinkPathProvider>
            <CategoryMobileProvider>
              <CategoryClothesProvider>
                <CategoryBookProvider>
                  <BrowserRouter>
                    <App />
                  </BrowserRouter>
                </CategoryBookProvider>
              </CategoryClothesProvider>
            </CategoryMobileProvider>
          </LinkPathProvider>
        </BookWithCategoryNameProvider>
      </SearchProvider>
    </TitleProvider>
  </>
);

reportWebVitals();
