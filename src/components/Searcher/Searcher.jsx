import { Input } from "antd";
import { Col } from "antd";
const Searcher = () => {
  return (
    <Col span={8} offset={8}>
      <Input.Search placeholder="Buscar...." style={{marginBottom: 30}}/>
    </Col>
  );
};
export { Searcher };
