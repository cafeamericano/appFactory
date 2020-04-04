<template>
    <div class='container bg-dark'>
        <div class='card rounded mb-3 p-3 text-left'>

            <form>

                <label>Title</label>
                <input type='text'  v-model='title' class='form-control'/>
                <br/>

                <label>Publish Date</label>
                <input type='date'  v-model='publishDate' class='form-control'/>
                <br/>

                <label>Featured?</label>
                <input type='checkbox' v-model='isFeatured' class='form-control'/>
                <br/>

                <label>Collaboration?</label>
                <input type='checkbox'  v-model='isCollaboration' class='form-control'/>
                <br/>

                <label>Image</label>
                <input type='file'/>
                <br/><br/>

                <label>Language</label>
                <input type='text'  v-model='language' class='form-control'/>
                <br/>

                <label>Description</label>
                <textarea  v-model='description' class='form-control'/>
                <br/>

                <label>Deployed Link</label>
                <input type='text'  v-model='deployedLink' class='form-control'/>
                <br/>

                <label>GitHub Link</label>
                <input type='text'  v-model='githubLink' class='form-control'/>
                <br/>

                <label>Support Status</label>
                <select v-model='supportStatus' class='form-control'>
                    <option default disabled>Select support status</option>
                    <option value='active'>Active</option>
                    <option value='inactive'>Inactive</option>
                    <option value='discontinued'>Discontinued</option>
                </select>
                <br/>

                <label>Application Type</label>
                <select v-model='applicationType' class='form-control'>
                    <option default disabled>Select application type</option>
                    <option value='client-side'>Client Side</option>
                    <option value='server-side'>Server Side</option>
                    <option value='unified'>Unified</option>
                </select>
                <br/>

                <label>Keywords</label>
                <input type='text' v-model='keywords' class='form-control'/>
                <br/>
                
                <br/>

                <div class='btn btn-primary' @click='handleSubmit'>Submit</div>

            </form>

        </div>
    </div>
</template>

<script>

export default {
    name: 'AppForm',
    props: [],
    methods: {
        handleSubmit: function() {
            var url = 'https://central-api-flask-cm6ud432ka-uc.a.run.app/AppGalleryLite/api/applications'
            fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    title: this.title,
                    publishDate: this.publishDate,
                    isFeatured: this.isFeatured,
                    isCollaboration: this.isCollaboration,
                    language: this.language,
                    description: this.description,
                    deployedLink: this.deployedLink,
                    githubLink: this.githubLink,
                    supportStatus: this.supportStatus,
                    applicationType: this.applicationType,
                    keywords: this.keywords
                })
            }).then(response => {
                console.log(response);
                alert('added new app')
            });
        }
    },
    data: function () {
        return {
            title: '',
            publishDate: '',
            isFeatured: '',
            isCollaboration: '',
            language: '',
            description: '',
            deployedLink: '',
            githubLink: '',
            supportStatus: '',
            applicationType: '',
            keywords: ''
        }
    },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

label {
    display: block
}

</style>
