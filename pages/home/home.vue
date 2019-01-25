<template>
	<view class="container">
<!-- 		<view class="img-view">
			<image src="https://minicdn.meijinguanjia.com/image/20181123/27dd80005816fc28d1d510005b72c1f1.png"></image>
		</view> -->
		<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
			<swiper-item v-for="item in banners" :key="item.id">
				<view class="swiper-item uni-bg-red">
					<image :src="item.img.url" class="banner"></image>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import {
		getBanner
	} from '../home/model.js';
	export default {
		data() {
			return {
				title: 'swiper',
				background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				banners: [{id:1, url: 'http://www.baidu.com'}]
			};
		},
		onLoad() {
			uni.setNavigationBarColor({
				frontColor: "#ffffff",
				backgroundColor: "#e03a51"
			})			
		},
		onReady() {
			this.init()			
		},
		methods: {
			init() {
				getBanner(res=>{
					console.log(res);
					this.banners = res.data.item
				})
			}
		}
	}
</script>

<style lang="scss">
	.container .img-view image {
		width: 750upx;
		height: 300upx;
	}
	.banner{
		width: 750upx;
		height: 300upx;		
	}
</style>
