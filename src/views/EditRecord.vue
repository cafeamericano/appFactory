<template>
    <div class='container animated fadeInRight'>
        <div class='card rounded p-3 text-left'>
            <AppDetails
                :isNewRecord='isNewRecord'
            />
        </div>
    </div>

</template>

<script>

import AppDetails from "../components/AppDetails"

export default {
    name: 'EditRecord',
    components: {
        AppDetails
    },
    data() {
        return {
            isNewRecord: false
        }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
