<template>
    <div class="distribution">
        <navbar></navbar>
        <banner img="url(/static/images/solution_cases/home_banner02.png) no-repeat center"></banner>
        <transition-block></transition-block>
        <func></func>
        <advantages></advantages>
        <reward></reward>
        <analyze></analyze>
        <support></support>
        <index-footer></index-footer>
    </div>
</template>

<script>
    import navbar from "../public/Navbar"
    import slogan from "../public/title"
    import banner from "../public/banner"
    import transitionBlock from "./distribution/cases"
    import func from "./distribution/func"
    import advantages from "./distribution/advantages"
    import reward from "./distribution/reward"
    import analyze from "./distribution/analyze"
    import support from "./distribution/support"
    import indexFooter from "../public/IndexFooter"
    export default {
        components: {
            navbar,
            slogan,
            banner,
            transitionBlock,
            func,
            advantages,
            reward,
            analyze,
            indexFooter,
            support
        },
        data() {
            return {
                title: "小程序微分销一站式解决方案",
                detail:"小程序+公众号一体化微信商城，快速开启移动端电商市场，打造多入口引流，布局线上线下多营销入口，快速变现。",
                num:0
            }
        }
    }
</script>
<style scoped lang="stylus">
    .distribution
        width: 100%
        .distribution_cases
            width: 100rem
            height: 61.75rem
            margin: 0 auto
            .distribution_cases_items
                width: 100rem
                height: 50rem
</style>