import "./Adtabs.module.css"
import { Tabs} from "antd"

export default ()=>{
    return ( 
        <Tabs defaultActiveKey="1" className="comm-box">
             <Tabs.TabPane tab="密圈" key="miquan" tabKey="1">
                     密圈
             </Tabs.TabPane>
             <Tabs.TabPane tab="公众号" key="wechat" tabKey="2">
             公众号
             </Tabs.TabPane>
             <Tabs.TabPane tab="QQ群" key="qqgroup" tabKey="3">
                     QQ 群
             </Tabs.TabPane>
        </Tabs>
    )
}
