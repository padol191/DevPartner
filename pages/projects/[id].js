import React, {useState} from 'react';
import TabsRender from '../../components/tabs';
import DashboardLayout from '../../components/dashboardLayout'

const Id = () => {

    const tabName = useState("documentation");


    return (
        <div>
            <TabsRender></TabsRender>
        </div> 
    );
}

export default Id;

Id.getLayout = function getLayout(page) {
    return <DashboardLayout>{page}</DashboardLayout>;
  };