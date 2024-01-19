<script setup lang='ts'>
import { ref } from 'vue'
import { useToggle } from '@/hooks/useToggle'
import type { BlogProps } from '@/components/types'


const props = defineProps<{blog: BlogProps}>()

const { flag, toggle } = useToggle(false)
const showMore = () => {
  toggle()
}

// const btnsRef: any = ref([])
// const showMore = () => {
//   if (btnsRef.value.classList.contains("active")) {
//     btnsRef.value.classList.remove("active")
//     return
//   }
//   btnsRef.value.classList.add("active")
// }

const likes = ref(props.blog.like)
const comments = ref(props.blog.comment)

const handleLike = () => {
  likes.value.list.push({
    name: "小明",
    avatar: "/assets/photo.webp",
    time: "2023-12-12 12:12:30",
  })
}

const handleComment = () => {
  comments.value.list.push({
    name: "小明",
    avatar: "/assets/photo.webp",
    time: "2023-12-12 12:12:30",
    comment: "评论内容",
  })
}
</script>

<template>
  <div class="blog">
    <div class="avatar">
      <img :src="blog.avatar" alt="avatar" />
    </div>
    <div class="content">
      <div class="name">{{ blog.name }}</div>
      <div class="text">
        <p>{{ blog.text }}</p>
      </div>
      <div class="resource">
        <template v-for="resource in blog.resource">
          <template v-if="resource.urls?.length > 0 &&resource.type === 'img'">
            <template v-if="resource.urls?.length >= 2">
              <div class="resource-img-group">
                <img v-for="url in resource.urls" :src="url" alt="" :key="url">
              </div>
            </template>
            <template v-else>
              <img v-for="url in resource.urls" :src="url" alt="" :key="url">
            </template>
          </template>
        </template>
      </div>
      <div class="other">
        <div class="posted">{{ blog.posted }}</div>
        <div class="more">
          <div class="btns" :class="flag ? 'active': ''" ref="btnsRef">
            <div class="btn like" @click="handleLike">点赞</div>
            <div class="btn comment" @click="handleComment">评论</div>
          </div>
          <div class="trigger" @click="showMore"></div>
        </div>
      </div>
      <div class="back">
        <div class="likes" v-if="likes.list.length > 0">
          <span class="like" v-for="like in likes.list" :key="like.toString">
            {{ like.name }}
          </span>
        </div>
        <div class="comments" v-if="comments.list.length > 0">
          <div class="comment" v-for="comment in comments.list" :key="comment.toString">
            <i>{{ comment.name }}</i>: {{ comment.comment }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang='scss' scoped>
.blog {
  display: flex;
  column-gap: 10px;
  margin-bottom: 20px;
  
  .avatar {
    height: fit-content;
    border-radius: 10px;
    overflow: hidden;

    img {
      width: var(--user-avatar-size);
      height: var(--user-avatar-size);
      object-fit: cover;
    }
  }

  .content {
    width: calc(100% - var(--user-avatar-size) - 10px);
    border-bottom: 1px solid var(--blog-back-line-color);

    > .name {
      width: 100%;
      font-size: 18px;
      font-weight: 900;
      color: #576B95;
      margin-bottom: 10px;
    }

    .text {
      width: 100%;
      margin-bottom: 10px;
      line-height: 1.5em;
      color: var(--main-text-color);
    }

    .resource {
      width: 100%;
      margin-bottom: 15px;

      .resource-img-group {
        display: flex;
        gap: 6px;

        img {
          width: 150px;
          height: 150px;
          object-fit: cover;
        }
      }

      img {
        width: 100%;
        max-width: 300px;
      }
    }

    .other {
      margin-bottom: 15px;
      display: flex;
      justify-content: space-between;

      .posted {
        font-size: 14px;
        color: var(--blog-posted-text-color);
      }

      .more {
        position: relative;
        .btns {
          display: flex;
          position: absolute;
          right: calc(100% + 4px);
          top: 50%;
          transform: translateY(-50%);
          width: 0;
          overflow: hidden;
          white-space: nowrap;
          background-color: #555555;
          border-radius: 4px;
          padding: 10px 0;
          transition: all 0.3s;

          .btn {
            flex: 1;
            text-align: center;
            color: #fff;
            font-size: 13px;
            font-weight: 300;
            cursor: pointer;

            + .btn {
              border-left: 1px solid #898989;
            }
          }
        }

        .btns.active {
          width: 170px;
          padding: 10px 4px;
        }

        .trigger {
          width: 30px;
          height: 20px;
          background-color: var(--blog-back-trigger-bg-color);
          border-radius: 4px;
          display: flex;
          justify-content: center;
          align-items: center;
          column-gap: 4px;
          cursor: pointer;

          &::before,
          &::after {
            content: "";
            display: block;
            width: 4px;
            height: 4px;
            background-color: #60739e;
            border-radius: 50%;
          }
        }
      }
    }

    .back {
      margin-bottom: 15px;
      background-color: var(--blog-back-bg-color);
      border-radius: 4px;
      font-size: 14px;

      .likes {
        padding: 4px 8px;
        border-bottom: 1px solid var(--blog-back-line-color);
        color: #576B95;
        
        .like {
          + .like {
            &::before {
              content: "，",
            }
          }
        }
      }

      .comments {
        padding: 4px 8px;

        .comment {
          color: var(--blog-back-text-color);

          + .comment {
            margin-top: 4px;
          }

          i {
            font-style: normal;
            color: #576B95;
          }
        }
      }
    }
  }
}

.blog:last-child {
  margin-bottom: 0;
}
</style>
