<template>
    <div>
        <div class='card rounded mb-3 p-3 text-left'>

            <strong>{{ $attrs.title }}</strong>
            <router-link :to="{name:'EditRecord', params: {id: $attrs._id.$oid || $attrs._id}}"><div class='btn btn-primary'>Edit</div></router-link>

        </div>
    </div>

</template>

<script>

export default {
    name: 'AppCard',
    data: function () {
        return {
            // Properties go here
        }
    },
    props: []
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
