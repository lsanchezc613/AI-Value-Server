import React from 'react';
import { Layout, Avatar, Menu, Breadcrumb, Card } from 'antd';
import 'react-svg-radar-chart/build/css/index.css'
import Head from '../../Layouts/Head';
import MenuSide from '../../Layouts/MenuSide';

const { Footer, Content } = Layout;
// const ShowTheLocationWithRouter = withRouter(ShowTheLocation);

function Driver() {
  return (
    <div className="App">
      <Layout>
        <Head />
        <Layout>
          <MenuSide />
          <Layout>
            <Content style={{ padding: '0 50px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>⠀</Breadcrumb.Item>
              </Breadcrumb>
              <div site-layout-content style={{ background: '#fff', padding: 24, minHeight: 580 }}>

                Prueba
                {/* <ShowTheLocationWithRouter /> */}
                {/* <ShowTheLocation /> */}
                {/* {{
									switch(id) {
									case 1:
										<h1>

										break;

									default:
										break;
								}}} */}

                <h3></h3>
                <p></p>
              </div>
              {/* <div className="site-layout-content">Content</div> */}
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2020 Created by Dàbái</Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default Driver;




// ------------------------------------------------------------------------------------


// import React from "react";

// const Product = ({ match, data }) => {
//   const product = data.find(p => p.id === Number(match.params.productId));
//   let productData;

//   if (product)
//     productData = (
//       <div>
//         <h3> {product.name} </h3>
//         <p>{product.description}</p>
//         <hr />
//         <h4>{product.status}</h4>
//       </div>
//     );
//   else productData = <h2> Sorry. Product doesn't exist </h2>;

//   return (
//     <div style={{ display: "flex" }}>
//       <div
//         style={{
//           padding: "0 10% 0 10%",
//           width: "80%",
//           margin: "auto",
//           background: "#ffffff"
//         }}
//       >
//         {productData}
//       </div>
//     </div>
//   );
// };

// export default Product;
