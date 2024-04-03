import { Flex, Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import BookWithCategoryName from "../../context/Book/book_with_category_name";
import { useContext, useEffect } from "react";
import Search from "../../context/search";
import { getListBookWithCategoryName } from "../../services/bookService";
import "./style.css";
import Title from "../../context/title";
function Book() {
  const { allBookWithCategoryName, setAllBookWithCategoryName } =
    useContext(BookWithCategoryName);
  const { title, setTitle } = useContext(Title);
  const { search, setSearch } = useContext(Search);
  const pathName = window.location.pathname;
  console.log(pathName);
  // "/category-clothes/sach%20trinh%20tham"
  const segments = pathName.split("/"); // Tách chuỗi dựa vào "/"
  const lastSegment = segments.pop(); // Lấy phần tử cuối cùng: "sach%20trinh%20tham"
  const decodedSegment = decodeURIComponent(lastSegment);

  useEffect(() => {
    const get = async () => {
      const newAllBookWithCategoryName = await getListBookWithCategoryName(
        `book/categories/${decodedSegment}`
      );
      setAllBookWithCategoryName(newAllBookWithCategoryName);
    };
    get();
  }, [decodedSegment]);
  return (
    <>  
      <div className="container">
        <Flex wrap="wrap" gap="small">
          {allBookWithCategoryName.map((book) => (
            <div key={book.id} className="container__box">
              {" "}
              {/* Sử dụng book.id làm key */}
              <Button className="image">
                <img src={book.image_url} alt="Hình ảnh" />
              </Button>
              <div className="title">
                <h3>{book.title}</h3>
              </div>
              <div className="price_and_cart">
                <p>{book.price}</p>
                <Button type="primary">
                  {" "}
                  <ShoppingCartOutlined /> Thêm vào giỏ hàng
                </Button>
              </div>
            </div>
          ))}
        </Flex>
      </div>
    </>
  );
}
export default Book;
