<template>
  <div>
    <PaymentsDisplay />
    <Pagination/>
  </div>
</template>
<script>

import PaymentsDisplay from "../components/PaymentsDisplay";
import Pagination from "../components/Pagination";

export default{
  name:"StartPage",
  components: {
    PaymentsDisplay,
    Pagination,
  },
}
</script>