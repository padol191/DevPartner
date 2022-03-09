import React from 'react'
import DashboardLayout from '../components/dashboardLayout'

export default function editProfile() {
  return (
    <div>editProfile</div>
  )
}

editProfile.getLayout = function getLayout(page) {
    return <DashboardLayout>{page}</DashboardLayout>;
  };
