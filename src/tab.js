import './css/style.css';
import { Tabs, Tab } from "react-bootstrap";
import Table from "./table";
import PieChart from './piechart';

function AddTab() {
    return (
        <div className="row mt-4">
            <div className="col-md-4 offset-4">
                <Tabs className="text-justify" defaultActiveKey="Table">
                    <Tab eventKey="Table" title="Table">
                        <Table/>
                    </Tab>
                    <Tab eventKey="PieChart" title="Piechart">
                        <PieChart/>
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
}

export default AddTab;