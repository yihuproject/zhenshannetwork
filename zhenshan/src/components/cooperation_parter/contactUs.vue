<template>
    <div class="contactus">
        <slogan title="联系我们" color="#fff"></slogan>
        <div class="contactus_center">
            <div class="contactus_center_form">
                <div class="contactus_center_form_np">
                    <input type="text" placeholder="您的姓名">
                    <input type="text" placeholder="您的联系电话">
                </div>
                <div class="contactus_center_form_describe">
                    <textarea placeholder="描述您的需求，准确详细的需求可以得到更快的回复哦"></textarea>
                </div>
                <div class="contactus_center_form_button">
                    <span>立即提交</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import slogan from "../public/title"
    export default {
        data(){
            return {
              
            }
        },
        components: {
            slogan
        },
    }
</script>

<style>
    .contactus{
        width: 100%;
        height: 50rem;
        background: url(/static/images/parter/dl_icon_bnt.png) no-repeat center;
        background-size:cover;
    }
    .contactus .contactus_center{
        width: 100rem;
        height: 34.7rem;
        margin: 0 auto;
    }
    .contactus .contactus_center .contactus_center_form{
        width: 76rem;
        height: 34.7rem;
        margin: 0 auto;
    }
    .contactus .contactus_center .contactus_center_form_np{
        width: 76rem;
        height: 11rem;
    }
    .contactus .contactus_center .contactus_center_form_np>input{
        width: 33rem;
        height: 3rem;
        padding: 1rem;
        background: #fff;
        border-radius: 8px;
        color:#666;
        font-size: 16px;
        margin: 3rem 0;
    }
    .contactus .contactus_center .contactus_center_form_np input:last-child{
        margin-left: 5rem;
    }
    .contactus .contactus_center .contactus_center_form_describe{
        width: 76rem;
        height: 11rem;
    }
    .contactus .contactus_center .contactus_center_form_describe>textarea{
        width: 73rem;
        height: 8rem;
        line-height: 2rem;
        padding: 1rem;
        background: #fff;
        border-radius: 6px;
        color:#666;
        margin: 0.5rem 0;
        font-size: 16px;
        overflow: hidden;
        
    }
    .contactus .contactus_center .contactus_center_form_button{
        width: 16.7rem;
        height: 11rem;
        margin: 0 auto;
        margin-top: 4.3rem;
    }
    .contactus .contactus_center .contactus_center_form_button>span{
        width: 16.7rem;
        height: 5rem;
        line-height: 5rem;
        text-align: center;
        display: inline-block;
        border:2px solid #fff;
        border-radius: 6px;
        font-size: 18px;
        color:#fff;
    }
</style>
