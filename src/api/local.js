import request from '@/utils/request'

export default{
    add(local){
        return request({
            url: '/setting/areaOfDistributionse',
            method: "post",
            data: local
        })
    }
}