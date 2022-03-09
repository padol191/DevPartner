import React from 'react'
import DashboardLayout from '../components/dashboardLayout';

export default function dashboard() {
  return (
    <div>dashboard</div>
  )
}

dashboard.getLayout = function getLayout(page) {
    return <DashboardLayout>{page}</DashboardLayout>;
  };