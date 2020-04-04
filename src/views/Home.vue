<template>
    <div class='container bg-info p-3'>
        <router-link :to="{name:'AppForm'}">
            <div class='btn btn-danger mb-3'>
                Add New Application
            </div>
        </router-link>
        <div class='row'>
            <div class='col-4' v-for='item in allApplications' :key='item.title'>
                <AppCard v-bind='item'/>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import AppCard from "@/components/AppCard.vue";

export default {
    name: "Home",
    components: {
        AppCard
    },
    mounted: function() {
        this.pullApplications();
        this.pullKeywords();
    },
    data() {
        return {
            componentKey: 0,
            allApplications: []
        }
    },
    methods: {
        pullApplications() {
            var self = this;
            fetch("https://central-api-flask-cm6ud432ka-uc.a.run.app/AppGalleryLite/api/applications").then(function (response) {
                return response.json();
            }).then(function (result) {
                self.allApplications = result;
                self.componentKey +=1;
            });
        },
        pullKeywords() {
            var self = this;
            fetch("https://central-api-flask-cm6ud432ka-uc.a.run.app/AppGalleryLite/api/keywords").then(function (response) {
                return response.json();
            }).then(function (result) {
                self.todos = result;
                self.componentKey +=1;
            });
        }
    }
};
</script>
