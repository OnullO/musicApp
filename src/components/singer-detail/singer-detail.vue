<template>
  <div class="singer-detail">
    <music-list :title="title" :bg-image="bgImage" :songs="songs"></music-list>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getSingerDetail } from '../../api/singer'
import { ERR_OK } from 'api/config'
import { createSong } from 'common/js/song'
import MusicList from 'components/music-list/music-list'


export default {
  data() {
    return {
      songs: []
    }
  },
  computed: {
    title(){
      return this.singer.name
    },
    bgImage(){
      return this.singer.avatar
    },
    ...mapGetters([
      'singer'
    ])
  },
  created() {
    this._getDetail();
    //  console.log(33)
    //  console.log(this.singer)
  },
  methods: {
    _getDetail() {
      if (!this.singer.id) {
        this.$router.push('/singer')
        return
      }
      getSingerDetail(this.singer.id).then((res) => {
        if (res.code === ERR_OK) {
          this.songs = this._normalizeSongs(res.data.list)
          console.log(this.songs)
        }
      })
    },
    _normalizeSongs(list) {
      let ret = []
      list.forEach((item) => {
        let { musicData } = item
        if (musicData.songid && musicData.albummid) {
          ret.push(createSong(musicData))
        }
      })
      return ret
    },
    
  },
  components:{
    MusicList
  }
}
</script>


<style scoped lang="stylus" rel="stylesheet/stylus">

</style>