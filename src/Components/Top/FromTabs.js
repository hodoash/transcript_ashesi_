import React from "react";
import Tabs, { TabPane } from "rc-tabs";

function FromTabs() {
  var callback = function (key) {};

  return (
    <div>
      <Tabs className="" defaultActiveKey="2" onChange={callback}>
        <TabPane tab="tab 1" key="1">
          first
        </TabPane>
        <TabPane tab="tab 2" key="2">
          second
        </TabPane>
      </Tabs>
    </div>
  );
}

export default FromTabs;
