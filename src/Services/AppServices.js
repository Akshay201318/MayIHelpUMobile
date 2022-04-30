import { ShowToast } from '@/helper'
import { setNetworkError } from '@/Store/Network'
import axios from 'axios'
import config from '../../config'

let baseUrl = config.BASE_URL
const fetchUrl = `${baseUrl}/invoke`
const postUrl = `${baseUrl}/invoke`
const uploadUrl = `${baseUrl}`

export const fetch =  ({ uri })=>async dispatch => {
  let { url, id, props, fetchCount, token, timezoneOffset, platform } = uri //remove fetchCount after data get from server
  url = url || fetchUrl
  // token = get('token') || null;
  // if (!token) {
  //   token = get(token);
  // }
  if (!id) {
    id = '_find'
  }
  let paramValue = { ...props }
  let uriProps = {
    id,
    paramValue,
    token,
    timezoneOffset,
    platform,
  }

  return axios
    .post(`${url}`, uriProps)
    .then(res => {
      let { result, ...rest } = res.data.response
      return {
        data: result,
        ...rest,
      }
    })
    .catch(e => {
      if(e.message==="Network Error"){
        // dispatch(setNetworkError({status:true}))
        ShowToast("Network Error");
      }
      throw new Error(e)
    })
}

export const post = async ({
  url = postUrl,
  id = '_batchSave',
  data,
  updates,
  batchUpdates,
  model,
  token,
}) => {
  if (!batchUpdates) {
    let _id = data._id
    let op = void 0
    if (!_id || (typeof _id === 'string' && _id.startsWith('new_'))) {
      op = { insert: updates }
    } else {
      op = { update: { changes: updates, _id } }
    }
    batchUpdates = [{ updates: op, model }]
  }
  let uriProps = {
    timezoneOffset: new Date().getTimezoneOffset(),
    platform: 'web',
    token,
    paramValue: {
      updates: batchUpdates,
    },
    id,
  }
  return axios
    .post(`${url}`, uriProps)
    .then(res => {
      res = res.data.response
      return res
    })
    .catch(e => {
    console.log("🚀######### ~ file: AppServices.js ~ line 83 ~ e", e);
    throw new Error(e)
      // handleError(e)
    })
}

export const upload = async (file, token,options = {}) => {
  let { multiPart = true, uri = '/upload', s3 = true } = options;
  if (multiPart) {
    let formData = new FormData();

    formData.append('', file)
    formData.append('token', token)
    formData.append('timezoneOffset', -330)
    formData.append('platform', 'mobile')

    if (s3) {
      formData.append('s3', true)
    }

    console.log(
      '🚀######### ~ file: AppServices.js ~ line 97 ~ upload ~ formData',
      JSON.stringify(formData),
    )

    return await axios
      .post(`${uploadUrl}${uri}`, formData, {
        headers: {},
        transformRequest: (data, headers) => {
          delete headers.post['Content-Type']
          return data
        },
      })
      .then(res => {
        let result = res.data;
        result = result.response && result.response;
        result = result && result.length ? result[0] : result;
        return result;
      })
      .catch(e => {
        console.log(
          '🚀######### ~ file: AppServices.js ~ line 114 ~ upload ~ e',
          e,
        );
      })
  } else {
    console.warn(new Error('Upload not supported without multiPart'));
  }
}

export const getImageUrl = (file, token) => {
  if (!file) {
    return;
  }
  return `${baseUrl}/download/gcs?token=${token}&fileName=${file}`;
};

export const invoke = ({ url, paramValue, id, token: uriToken }) => {

  return axios
    .post(url || fetchUrl, {
      id,
      paramValue,
      token: uriToken
    })
    .then(res => {
      res = res.data.response;
      return res;
    })
    .catch(e => {
      throw new Error(e);
    });
};
