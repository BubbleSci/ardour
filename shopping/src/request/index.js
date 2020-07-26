
let ajaxTimes = 0;
export const request = (params) => {
    ajaxTimes++;
    wx.showLoading({
        title: '加载中',
        mask: true,
    });

    const baseUrl = 'https://api-hmugo-web.itheima.net/api/public/v1';
    return new Promise((resolve, reject) => {
        wx.request({
            ...params,

            url: baseUrl + params.url,
            success: (result) => {
                resolve(result.data.message);
            },
            fail: (error) => {
                reject(error);
            },
            complete: () => {
                ajaxTimes--;
                if (ajaxTimes === 0) {
                    wx.hideLoading();
                }
            },
        });
    });
};

