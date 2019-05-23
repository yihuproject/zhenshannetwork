<template>
    <div class="content">
        <slogan title="我们是谁"></slogan>
        <div class="content_all">
            <p>
                深圳市前海一户文化科技有限公司正因一颗敬畏互联网的心，让我们都以认真、负责和尊重的态度去对待每一个客户。 源于对互联网的狂热，因此让我们一次次的直面挑战，致使求知、探索和创新成为公司每位成员一种内在的本能。 我们透过作品去与每一个人沟通，通过项目成果告诉人们我们的执着与信念。当然，成就一个好的案例， 离不开团队成员之间的信任与情感，有了这些内因的推动，才让公司始终为了美好去设计、为了信念去开发。 坚持小而美的团队，使得我们团队协作的更紧密、更有热情的去创造。
            </p>
            <img src="/static/images/about/gywm_bnt.png">
            <p>
                服务范围包括移动应用平台：小程序定制、公众号开发、APP开发、商城平台、分销系统、移动应用开发……等定制研发，目前超过900多家企业正使用我们开发定制的软件产品。“务实、创新、诚信、共赢、匠心研发、倾力服务”是我们的客户服务宗旨。
            </p>
        </div>
    </div>
</template>

<script>
    import slogan from "../public/title"
    export default{
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
    .content{
        width: 100%;
        height: auto;
    }
    .content .content_all{
        width: 100rem;
        height: auto;
        margin: 0 auto;
    }
    .content .content_all p{
        padding: 2.5rem 8.3rem;
        font-size: 16px;
        color:#333;
    }
    .content .content_all p:first-child{
        padding-top:0;
    }
    .content .content_all img{
        width: 100rem;
        height: auto;
    }
    
    
    
</style>
