import Header from "../../components/Header";
import Form from "../../components/Form";
import TotalMoney from "../../components/TotalMoney";
import List from "../../components/List";
import Card from "../../components/Cards";
import "../Page1/style.css";

const Page1 = () => {
  return (
    <div>
      <Header />
      <div className="main-home">
        <div className="form-total">
          <Form />
          <TotalMoney />
        </div>
        <div className="list">
          <List />
          <Card />
        </div>
      </div>
    </div>
  );
};
export default Page1;
