<template>
    <div class='container animated fadeInRight'>
        <div class='card rounded p-3 text-left'>

            <small>{{ this.$route.params.id }} </small>

            <form>

                <label>Title</label>
                <input type='text'  v-model='app.title' class='form-control'/>
                <br/>

                <label>Publish Date</label>
                <input type='date'  v-model='app.publishDate' class='form-control'/>
                <br/>

                <label>Featured?</label>
                <input type='checkbox' v-model='app.isFeatured' class='form-control'/>
                <br/>

                <label>Collaboration?</label>
                <input type='checkbox'  v-model='app.isCollaboration' class='form-control'/>
                <br/>

                <label>Image</label>
                <img id='editApp-uploadImagePreview' height='100px' width='150px' :src='app.imagePath'/>
                <br/><br/>
                <input id='uploadImageWhenEditingApp' type='file' @change='encodeImageUpload'/>
                <br/><br/>

                <label>Language</label>
                <input type='text'  v-model='app.language' class='form-control'/>
                <br/>

                <label>Description</label>
                <textarea  v-model='app.description' class='form-control'/>
                <br/>

                <label>Deployed Link</label>
                <input type='text'  v-model='app.deployedLink' class='form-control'/>
                <br/>

                <label>GitHub Link</label>
                <input type='text'  v-model='app.githubLink' class='form-control'/>
                <br/>

                <label>Support Status</label>
                <select v-model='app.supportStatus' class='form-control'>
                    <option default disabled>Select support status</option>
                    <option value='active'>Active</option>
                    <option value='inactive'>Inactive</option>
                    <option value='discontinued'>Discontinued</option>
                </select>
                <br/>

                <label>Application Type</label>
                <select v-model='app.applicationType' class='form-control'>
                    <option default disabled>Select application type</option>
                    <option value='client-side'>Client Side</option>
                    <option value='server-side'>Server Side</option>
                    <option value='unified'>Unified</option>
                </select>
                <br/>

                <label>Keywords</label>
                <input type='text' v-model='app.keywords' class='form-control'/>
                <br/>
                
                <br/>

                <div class='row'>
                    <div class='col text-left'>
                        <div class='btn btn-danger' @click='processDelete'>Delete</div>
                    </div>
                    <div class='col text-right'>
                        <div class='btn btn-secondary ml-2' @click='$router.go(-1)'>Cancel</div>
                        <div class='btn btn-primary ml-2' @click='processEdit'>Update</div>
                    </div>
                </div>

            </form>

        </div>
    </div>

</template>

<script>

export default {
    name: 'AppCard',
    mounted: function() {
        this.processGet();
    },
    data() {
        return {
            uuid: this.$route.params.id,
            app
            // title: this.$attrs.title,
            // publishDate: this.$attrs.publishDate.substring(0,10),
            // isFeatured: this.$attrs.isFeatured,
            // isCollaboration: this.$attrs.isCollaboration,
            // language: this.$attrs.language,
            // description: this.$attrs.description,
            // deployedLink: this.$attrs.deployedLink,
            // githubLink: this.$attrs.githubLink,
            // supportStatus: this.$attrs.supportStatus,
            // applicationType: this.$attrs.applicationType,
            // keywords: this.$attrs.keywords
        }
    },
    props: [],
    methods: {
        encodeImageUpload: function() {
            var self = this;
            const preview = document.getElementById('editApp-uploadImagePreview');
            const file = document.getElementById('uploadImageWhenEditingApp').files[0];
            const reader = new FileReader();
        
            reader.addEventListener("load", function () {
                // convert image file to base64 string
                console.log(reader.result)
                preview.src = reader.result;
                self.app.imagePath = reader.result;
            }, false);

            if (file) {
                reader.readAsDataURL(file);
            }

        },
        processGet: function() {
            var self = this;
            var url = 'https://central-api-flask-cm6ud432ka-uc.a.run.app/AppGalleryLite/api/applications'
            fetch(url, {
                method: "GET",
                headers: { "Content-Type": "application/json" }
            }).then(function (response) {
                return response.json();
            }).then(response => {
                let litmus;
                for (var i = 0; i < response.length; i++) {
                    if (response[i]._id.$oid === self.uuid || response[i]._id === self.uuid) {
                        litmus = response[i]
                    }
                }
                console.log(litmus)
                self.app = litmus;
                self.app.publishDate = self.app.publishDate.substring(0,10)
                console.log(response)
            });
        },
        processEdit: function() {
            var self = this;
            var url = 'https://central-api-flask-cm6ud432ka-uc.a.run.app/AppGalleryLite/api/applications'
            fetch(url, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    _id: this.$route.params.id,
                    title: this.app.title,
                    publishDate: this.app.publishDate,
                    isFeatured: this.app.isFeatured,
                    isCollaboration: this.app.isCollaboration,
                    imagePath: this.app.imagePath,
                    language: this.app.language,
                    description: this.app.description,
                    deployedLink: this.app.deployedLink,
                    githubLink: this.app.githubLink,
                    supportStatus: this.app.supportStatus,
                    applicationType: this.app.applicationType,
                    keywords: this.app.keywords
                })
            }).then(response => {
                console.log(response)
                self.$router.go(-1)
            });
        },
        processDelete: function() {
            var self = this;
            var url = 'https://central-api-flask-cm6ud432ka-uc.a.run.app/AppGalleryLite/api/applications'
            fetch(url, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    _id: this.$route.params.id
                })
            }).then(response => {
                console.log(response)
                self.$router.go(-1)
            });
        }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
label {
    display: block
}
</style>
