<script setup lang='ts'>
import { computed } from 'vue'
import Blog from '@/components/Blog.vue'
import type { BlogProps } from '@/components/types'

import testImg from '@/assets/Cute_Little_Bear_Bamboo_HD_Photo Wallpaper_1920x1080[10wallpaper.com].jpg'
import testImg1 from '@/assets/Snipaste_2024-01-17_17-42-41.png'
import testImg2 from '@/assets/WechatIMG18.jpg'
import testImg3 from '@/assets/WechatIMG4.jpg'
import testImg4 from '@/assets/WechatIMG5.jpg'
import jc from '@/assets/a70ba1cd29ded8760d47bf0fc7b58c14.jpg'

const data: BlogProps[] = [
  {
    id: 0,
    name: "朱梓硕",
    avatar: testImg1,
    text: `谁知道这是什么动物`,
    resource: [
      {
        type: "img",
        urls: [
          testImg,
        ],
      },
      {
        type: "video",
      },
      {
        type: "audio",
      }
    ],
    posted: "2023-12-13 00:12:30",
    like: {
      count: 100,
      list: [
        {
          name: "小明",
          avatar: "/assets/photo.webp",
          time: "2023-12-12 12:12:30",
        },
        {
          name: "小红",
          avatar: "/assets/photo.webp",
          time: "2023-12-12 12:12",
        }
      ]
    },
    comment: {
      count: 100,
      list: [
        {
          name: "小红",
          avatar: "/assets/photo.webp",
          time: "2023-12-12 12:12",
          comment: "这是哪里"
        },
        {
          name: "小明",
          avatar: "/assets/photo.webp",
          time: "2023-12-12 12:12:30",
          comment: "竹子好吃"
        },
        {
          name: "朱梓硕",
          avatar: "/assets/photo.webp",
          time: "2023-12-12 12:12",
          comment: "这是什么动物"
        }
      ]
    }
  },
  {
    id: 1,
    name: "朱梓硕",
    avatar: testImg1,
    text: `谁与争锋`,
    resource: [
      {
        type: "img",
        urls: [
          jc,
        ],
      },
      {
        type: "video",
      },
      {
        type: "audio",
      }
    ],
    posted: "2023-12-12 12:12:30",
    like: {
      count: 100,
      list: [
        {
          name: "西明",
          avatar: "/assets/photo.webp",
          time: "2023-12-12 12:12:30",
        },
        {
          name: "华琴",
          avatar: "/assets/photo.webp",
          time: "2023-12-12 12:12",
        }
      ]
    },
    comment: {
      count: 100,
      list: [
        {
          name: "独善QAQ",
          avatar: "/assets/photo.webp",
          time: "2023-12-12 12:12:30",
          comment: "老Z，晚上喝两杯"
        },
        {
          name: "老刘",
          avatar: "/assets/photo.webp",
          time: "2023-12-12 12:12",
          comment: "老Z，别跟他喝"
        }
      ]
    }
  },
  {
    id: 2,
    name: "朱梓硕",
    avatar: testImg1,
    text: `今夜谁都别睡`,
    resource: [
      {
        type: "img",
        urls: [
          jc,
          testImg,
        ],
      },
      {
        type: "video",
      },
      {
        type: "audio",
      }
    ],
    posted: "2023-12-31 23:40:30",
    like: {
      count: 0,
      list: [ ]
    },
    comment: {
      count: 100,
      list: [ ]
    }
  },
  {
    id: 3,
    name: "朱梓硕",
    avatar: testImg1,
    text: `传家宝`,
    resource: [
      {
        type: "img",
        urls: [
          testImg2,
        ],
      },
      {
        type: "video",
      },
      {
        type: "audio",
      }
    ],
    posted: "2024-02-11 10:15:22",
    like: {
      count: 100,
      list: [
        {
          name: "小红",
          avatar: "/assets/photo.webp",
          time: "2023-12-12 12:12",
        },
        {
          name: "小明",
          avatar: "/assets/photo.webp",
          time: "2023-12-12 12:12:30",
        },
      ]
    },
    comment: {
      count: 100,
      list: [
        {
          name: "小红",
          avatar: "/assets/photo.webp",
          time: "2023-12-12 12:12",
          comment: "什么东西"
        },
        {
          name: "小明",
          avatar: "/assets/photo.webp",
          time: "2023-12-12 12:12:30",
          comment: "听说五张可以换一套房"
        },
        {
          name: "朱梓硕",
          avatar: "/assets/photo.webp",
          time: "2023-12-12 12:12",
          comment: "两张一套房"
        }
      ]
    }
  },
  {
    id: 4,
    name: "朱梓硕",
    avatar: testImg1,
    text: `如数家珍`,
    resource: [
      {
        type: "img",
        urls: [
          testImg3,
          testImg4
        ],
      },
      {
        type: "video",
      },
      {
        type: "audio",
      }
    ],
    posted: "2024-02-12 22:01:39",
    like: {
      count: 100,
      list: []
    },
    comment: {
      count: 100,
      list: [
        {
          name: "朱梓硕",
          avatar: "/assets/photo.webp",
          time: "2023-12-12 12:12",
          comment: "😁"
        }
      ]
    }
  }
]

const dataCompted = computed(() => {
  return data.sort((a, b) => {
    return new Date(b.posted).getTime() - new Date(a.posted).getTime()
  })
})
</script>

<template>
  <div class="home">
    <Blog v-for="item in dataCompted" :key="item.id" :blog="item" />
  </div>
</template>

<style lang='scss' scoped>

</style>
