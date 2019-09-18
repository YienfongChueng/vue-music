import axios from 'axios';

export const Music = {
    getMusicList({pageNum,pageSize,keywords} = {}){
        let params = {
            pageNum,
            pageSize,
            keywords
        };
        //http//www.baidu.com/api/music?pageNum=2&pageSize=20
        return axios.get('/api/music/list',{params}).then(res => {
            console.log(res.data);
            return res.data;
        }).catch(err => {
            console.log(err);
        });
    }
};