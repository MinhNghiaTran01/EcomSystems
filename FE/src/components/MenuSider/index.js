import { Menu } from "antd";
import { Link } from "react-router-dom";
import { AccountBookOutlined } from "@ant-design/icons";
import { useState, useEffect, useContext } from "react";
import { getListCategory } from "../../services/categoryService";
import CategoryBook from "../../context/category/categoryBook";
import CategoryMobile from "../../context/category/categoryMobile";
import CategoryClothes from "../../context/category/categoryClothes";
import LinkPath from "../../context/link_path";
import Book from "../Book";
import Mobile from "../Mobile";
import Clothes from "../Clothes";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

function MenuSider() {
  const { categoryBook, setCategoryBook } = useContext(CategoryBook);
  const { categoryMobile, setCategoryMobile } = useContext(CategoryMobile);
  const { categoryClothes, setCategoryClothes } = useContext(CategoryClothes);
  const { link, setLink } = useContext(LinkPath);
  console.log(categoryBook)
  useEffect(() => {
    let newLink = [];
    newLink = newLink.concat(
      categoryBook.map((item) => {
        let path = "book/categories/" + item.id;
        return {
          path: path,
          element: <Book />,
        };
      })
    );
    // Thêm các mục từ categoryMobile vào mảng link
    // newLink = newLink.concat(
    //   categoryMobile.map((item) => {
    //     let path = "mobile/categories/" + item.name;
    //     return {
    //       path: path,
    //       element: <Mobile />,
    //     };
    //   })
    // );
    // // Thêm các mục từ categoryClothes vào mảng link
    // newLink = newLink.concat(
    //   categoryClothes.map((item) => {
    //     let path = "clothes/categories/" + item.name;
    //     return {
    //       path: path,
    //       element: <Clothes />,
    //     };
    //   })
    // );
    setLink(newLink);
    console.log(newLink);
  }, [categoryBook,categoryMobile,categoryClothes]);
  // get list category book, mobile, clothes
  useEffect(() => {
    const get = async () => {
      const newCategoryBook = await getListCategory("book/categories");
      const newCategoryMobile = await getListCategory("mobile/categories");
      const newCategoryClothes = await getListCategory("clothes/categories");
      setCategoryBook(newCategoryBook);
      setCategoryMobile(newCategoryMobile);
      setCategoryClothes(newCategoryClothes);
    };
    get();
  }, []);

  const items = [
    getItem(<Link to="/">Trang chủ</Link>, "sub1", <AccountBookOutlined />),
   
    getItem(
      "Danh mục sách",
      "sub2",
      <AccountBookOutlined />,
      categoryBook.map((item) => {
        const path = "book/categories/" + item.id;
        return getItem(<Link to={path}>{item.name}</Link>, item.id, "", "");
      })
    ),
    getItem(
      "Danh mục quần áo",
      "sub3",
      <AccountBookOutlined />,
      categoryClothes.map((item) => {
        const path = "category-clothes/" + item.name;
        return getItem(<Link to={path}>{item.name}</Link>, item.id, "", "");
      })
    ),
    getItem(
      "Danh mục điện thoại",
      "sub4",
      <AccountBookOutlined />,
      categoryMobile.map((item) => {
        const path = "category-mobile/" + item.name;
        return getItem(<Link to={path}>{item.name}</Link>, item.id, "", "");
      })
    ),
    
    getItem(
      <Link to="/manager-products">Quản lý sản phẩm</Link>,
      "sub5",
      <AccountBookOutlined />
    ),
  ];

  return <Menu mode="vertical" items={items} defaultSelectedKeys={["sub1"]} />;
}

export default MenuSider;
