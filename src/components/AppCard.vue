<template>
    <div class='card rounded shadow mb-3 text-left'>
        <div class='row'>
            <div class='col'>
                <img :src='$attrs.imagePath'/>
            </div>
            <div class="col text-right p-3">
                <strong>{{ $attrs.title }}</strong>
                <br/>
                <router-link :to="{name:'EditRecord', params: {id: $attrs._id.$oid || $attrs._id}}"><div class='btn btn-primary'>Edit</div></router-link>
            </div>
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
<style scoped>

img {
    height: 100px;
    width: 150px;
}

</style>
