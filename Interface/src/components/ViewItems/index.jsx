import React, { useEffect, useState } from "react";
import ItemCard from "components/ItemCard";
import { Items, Title, WavesAnimation, Categories } from "./style";
import HeaderBudget from "components/HeaderBudget";
import Footer from "components/Footer";
import MyCart from "components/MyCart";

const ViewItems = () => {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Todas"); // Adicione essa linha

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(
          "https://jkfest-back-end.onrender.com/items"
        );
        if (response.ok) {
          const data = await response.json();
          setItems(data);
        } else {
          console.error("Erro ao buscar itens.");
        }
      } catch (error) {
        console.error("Erro ao conectar com o backend:", error);
      }
    };

    fetchItems();
  }, []);

  const addToCart = (item) => {
    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem._id === item._id
    );

    if (existingItemIndex !== -1) {
      setCartItems((prevItems) =>
        prevItems.map((cartItem, index) =>
          index === existingItemIndex
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.filter((cartItem) => cartItem._id !== itemId)
    );
  };

  const handleIncreaseQuantity = (itemId) => {
    console.log(`Incrementando quantidade do item ${itemId}`);
    setCartItems((prevItems) =>
      prevItems.map((cartItem) =>
        cartItem._id === itemId
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );
  };

  const handleDecreaseQuantity = (itemId) => {
    console.log(`Decrementando quantidade do item ${itemId}`);
    setCartItems((prevItems) =>
      prevItems.map((cartItem) =>
        cartItem._id === itemId
          ? { ...cartItem, quantity: Math.max(1, cartItem.quantity - 1) }
          : cartItem
      )
    );
  };

  const categories = ["Todas", ...new Set(items.map((item) => item.category))];

  const filterItemsByCategory = () => {
    if (selectedCategory === "Todas") {
      return items;
    }
    return items.filter((item) => item.category === selectedCategory);
  };

  return (
    <>
      <HeaderBudget />
      <Title>
        <section className="container">
          <div className="content">
            <h1>Veja os itens abaixo</h1>
            <i className="fa fa-arrow-down"></i>
          </div>
        </section>
      </Title>

      <Categories>
        <div className="radio-inputs">
          {categories.map((category) => (
            <label key={category} className="radio">
              <input
                type="radio"
                name="category"
                checked={selectedCategory === category}
                onChange={() => setSelectedCategory(category)}
              />
              <span className="name">{category}</span>
            </label>
          ))}
        </div>
      </Categories>

      <WavesAnimation>
        <svg
          width="100%"
          height="100%"
          id="svg"
          viewBox="0 0 1440 490"
          xmlns="http://www.w3.org/2000/svg"
          className="transition duration-300 ease-in-out delay-150"
        >
          <path
            d="M 0,500 L 0,93 C 40.10548394943062,105.67846170283772 80.21096789886124,118.35692340567545 106,125 C 131.78903210113876,131.64307659432455 143.26161235398573,132.2507680801359 173,117 C 202.73838764601427,101.74923191986409 250.742582685196,70.64000427378087 281,70 C 311.257417314804,69.35999572621913 323.76805690523014,99.18921482474056 350,116 C 376.23194309476986,132.81078517525944 416.1851896938837,136.6031364272569 452,134 C 487.8148103061163,131.3968635727431 519.4911843192353,122.39823946623173 545,99 C 570.5088156807647,75.60176053376827 589.850073029175,37.80390570781615 616,48 C 642.149926970825,58.19609429218385 675.1085235640649,116.38613770250367 710,133 C 744.8914764359351,149.61386229749633 781.7158327145659,124.65154348216913 817,102 C 852.2841672854341,79.34845651783087 886.0281455776718,59.007688368819814 911,63 C 935.9718544223282,66.99231163118019 952.1715849747467,95.31770304255161 976,109 C 999.8284150252533,122.68229695744839 1031.2855145233414,121.72149946097373 1068,105 C 1104.7144854766586,88.27850053902627 1146.686356931888,55.796299113553445 1177,68 C 1207.313643068112,80.20370088644655 1225.969057749107,137.09330408481253 1253,137 C 1280.030942250893,136.90669591518747 1315.4374120716839,79.83048454719642 1348,63 C 1380.5625879283161,46.16951545280358 1410.281293964158,69.58475772640179 1440,93 L 1440,500 L 0,500 Z"
            stroke="none"
            strokeWidth="0"
            fill="#9900ef"
            fillOpacity="0.4"
            className="transition-all duration-300 ease-in-out delay-150 path-0"
            transform="rotate(-180 720 250)"
          ></path>
          <path
            d="M 0,500 L 0,218 C 25.549678623104505,209.1483955897446 51.09935724620901,200.2967911794892 86,216 C 120.90064275379099,231.7032088205108 165.15224963826847,271.9612308717879 194,263 C 222.84775036173153,254.0387691282121 236.29164420071692,195.85828533335922 264,193 C 291.7083557992831,190.14171466664078 333.681173558864,242.60562779477527 369,263 C 404.318826441136,283.3943722052247 432.98366156382735,271.71920348753986 457,250 C 481.01633843617265,228.28079651246017 500.3841801858267,196.5175582550655 531,183 C 561.6158198141733,169.4824417449345 603.4796176928659,174.21056349219828 636,184 C 668.5203823071341,193.78943650780172 691.6973490427099,208.6401877761414 723,217 C 754.3026509572901,225.3598122238586 793.7309861362946,227.22868540323617 822,231 C 850.2690138637054,234.77131459676383 867.3787064121115,240.44507061091392 896,246 C 924.6212935878885,251.55492938908608 964.7541882152595,256.9910321531082 999,239 C 1033.2458117847405,221.00896784689178 1061.6045407268505,179.59080077665334 1085,174 C 1108.3954592731495,168.40919922334666 1126.827648877339,198.6457647402785 1158,202 C 1189.172351122661,205.3542352597215 1233.0848637637932,181.8261402622327 1265,173 C 1296.9151362362068,164.1738597377673 1316.8328960674876,170.04967421079067 1344,180 C 1371.1671039325124,189.95032578920933 1405.5835519662562,203.97516289460467 1440,218 L 1440,500 L 0,500 Z"
            stroke="none"
            strokeWidth="0"
            fill="#9900ef"
            fillOpacity="0.53"
            className="transition-all duration-300 ease-in-out delay-150 path-1"
            transform="rotate(-180 720 250)"
          ></path>
          <path
            d="M 0,500 L 0,343 C 23.194934704799188,359.32446737404047 46.389869409598376,375.64893474808093 81,380 C 115.61013059040162,384.35106525191907 161.63545706640573,376.72872838171673 194,354 C 226.36454293359427,331.27127161828327 245.0683023247787,293.43615172505235 269,303 C 292.9316976752213,312.56384827494765 322.0913336344795,369.52666471807413 352,389 C 381.9086663655205,408.47333528192587 412.5663631373034,390.45718940265135 441,371 C 469.4336368626966,351.54281059734865 495.6432138163067,330.6445776713204 527,330 C 558.3567861836933,329.3554223286796 594.8607815974697,348.9644999120668 632,354 C 669.1392184025303,359.0355000879332 706.9136597938144,349.49742268041234 736,352 C 765.0863402061856,354.50257731958766 785.4845792272727,369.0458093662838 814,381 C 842.5154207727273,392.9541906337162 879.1480232970953,402.31933985445266 909,387 C 938.8519767029047,371.68066014554734 961.923327584346,331.67683121590534 990,327 C 1018.076672415654,322.32316878409466 1051.1586663655205,352.9733352819259 1085,366 C 1118.8413336344795,379.0266647180741 1153.4420069535718,374.42982765639096 1185,359 C 1216.5579930464282,343.57017234360904 1245.0733058201922,317.3073540925101 1268,313 C 1290.9266941798078,308.6926459074899 1308.2647697656594,326.34075597356855 1336,335 C 1363.7352302343406,343.65924402643145 1401.8676151171703,343.3296220132157 1440,343 L 1440,500 L 0,500 Z"
            stroke="none"
            strokeWidth="0"
            fill="#9900ef"
            fillOpacity="1"
            className="transition-all duration-300 ease-in-out delay-150 path-2"
            transform="rotate(-180 720 250)"
          ></path>
        </svg>
      </WavesAnimation>
      <Items>
        {filterItemsByCategory().map((item) => (
          <ItemCard key={item._id} item={item} onAddToCart={addToCart} />
        ))}
      </Items>
      <MyCart
        cartItems={cartItems}
        onRemoveFromCart={handleRemoveFromCart}
        onIncreaseQuantity={handleIncreaseQuantity}
        onDecreaseQuantity={handleDecreaseQuantity}
      />
      <Footer />
    </>
  );
};

export default ViewItems;
