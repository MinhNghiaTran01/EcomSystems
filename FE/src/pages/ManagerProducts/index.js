import {Select} from 'antd';
import { useEffect,useContext  } from 'react';
function ManagerProducts() {


  // const handleChange = (value) => {
  //   setSelectProduct(value);
  // }
  return (
    <>
      <div className="container">
          <div className="products-select">
          <Select
            defaultValue="Sách"
            style={{ width: 120 }}
            // onChange={handleChange}
            options={[
              { value: 'book', label: 'Sách' },
              { value: 'mobile', label: 'Điện thoại' },
              { value: 'clothes', label: 'Quần áo' },
            ]}
          />
          {/* {selectProduct} */}
          </div>
      </div>
    </>
  )
}

export default ManagerProducts;