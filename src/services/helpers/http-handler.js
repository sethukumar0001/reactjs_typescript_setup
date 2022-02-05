import { authHeader } from "./auth-header";

import { toast } from "react-toastify";
import config from "../Api/config";
import { authHeaderTenetId } from "./auth-header-tenentId";
import FileSaver from "file-saver";

let access_token = localStorage.getItem("access_token");

export const post = (url, payload) => {
  const requestOptions = {
    method: "POST",
    headers: authHeader(url),
    body: JSON.stringify(payload),
  };

  return fetch(`${url}`, requestOptions)
    .then(handleResponse)
    .then((data) => {
      return data;
    });
};

export const postFileUpload = (url, payload, id) => {
  const requestOptions = {
    method: "POST",
    headers: { Authorization: "Bearer " + access_token, powerpayTenantId: id },
    body: payload,
  };

  return fetch(`${url}`, requestOptions)
    .then(handleResponse)
    .then((data) => {
      return data;
    });
};

export const patchFileUpload = (url, payload) => {
  const requestOptions = {
    method: "PATCH",
    headers: { Authorization: "Bearer " + access_token },
    body: payload,
  };

  return fetch(`${url}`, requestOptions)
    .then(handleResponse)
    .then((data) => {
      return data;
    });
};

export const patch = (url, payload) => {
  const requestOptions = {
    method: "PATCH",
    headers: authHeader(url),
    body: JSON.stringify(payload),
  };

  return fetch(`${url}`, requestOptions)
    .then(handleResponse)
    .then((data) => {
      return data;
    });
};

export const put = (url, payload) => {
  const requestOptions = {
    method: "PUT",
    headers: authHeader(url),
    body: JSON.stringify(payload),
  };
  return fetch(`${url}`, requestOptions)
    .then(handleResponse)
    .then((data) => {
      return data;
    });
};

export const Delete = (url) => {
  const requestOptions = {
    method: "DELETE",
    headers: authHeader(url),
  };
  return fetch(`${url}`, requestOptions)
    .then(handleResponse)
    .then((data) => {
      return data;
    });
};

export const get = (url) => {
  try {
    const requestOptions = {
      method: "GET",
      headers: authHeader(url),
    };
    return fetch(`${url}`, requestOptions)
      .then(handleResponse)
      .then((data) => {
        return data;
      });
  } catch (error) {
    //console.log(error)
  }
};

export const getWithTenentId = (url, id) => {
  try {
    const requestOptions = {
      method: "GET",
      headers: authHeaderTenetId(id),
    };
    return fetch(`${url}`, requestOptions)
      .then(handleResponse)
      .then((data) => {
        return data;
      });
  } catch (error) {
    //console.log(error)
  }
};

export const postWithTenentId = (url, payload, id) => {
  try {
    const requestOptions = {
      method: "POST",
      headers: authHeaderTenetId(id),
      body: JSON.stringify(payload),
    };
    return fetch(`${url}`, requestOptions)
      .then(handleResponse)
      .then((data) => {
        return data;
      });
  } catch (error) {
    //console.log(error)
  }
};
export const putWithTenentId = (url, payload, id) => {
  try {
    const requestOptions = {
      method: "PUT",
      headers: authHeaderTenetId(id),
      body: JSON.stringify(payload),
    };
    return fetch(`${url}`, requestOptions)
      .then(handleResponse)
      .then((data) => {
        return data;
      });
  } catch (error) {
    //console.log(error)
  }
};

export const postWithTenentIdDownload = (url, payload, id) => {
  try {
    const requestOptions = {
      method: "POST",
      headers: authHeaderTenetId(id),
      body: JSON.stringify(payload),
    };
    return fetch(`${url}`, requestOptions)
      .then(handleResponseDownload)
      .then((data) => {
        return data;
      });
  } catch (error) {
    //console.log(error)
  }
};

export const getWithTenentIdDownload = (url, id, fileName) => {
  try {
    const requestOptions = {
      method: "GET",
      headers: authHeaderTenetId(id),
      // body: JSON.stringify(payload),
    };
    return fetch(`${url}`, requestOptions)
      .then((e) => handleResponseDownload(e, fileName))
      .then((data) => {
        return data;
      });
  } catch (error) {
    //console.log(error)
  }
};
export const postWithTenentIdDownloads = (url, payload, id) => {
  try {
    const requestOptions = {
      method: "POST",
      headers: authHeaderTenetId(id),
      body: JSON.stringify(payload),
    };
    return fetch(`${url}`, requestOptions)
      .then(handleResponseDownload)
      .then((data) => {
        return data;
      });
  } catch (error) {
    //console.log(error)
  }
};

export const getPayload = (url, payload) => {
  const requestOptions = {
    method: "GET",
    headers: authHeader(url),
    body: JSON.stringify(payload),
  };
  return fetch(`${url}`, requestOptions)
    .then(handleResponse)
    .then((data) => {
      return data;
    });
};

function logout() {
  localStorage.clear();
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        // logout();
        localStorage.clear();
        // window.location.reload()
        window.location.href = `/input-module/login`;
      }
      const error = (data && data.message) || response.statusText;
      toast.error(error, { className: "red-circle" });
      return Promise.reject(error);
    }

    return data;
  });
}

function handleResponseDownload(response, fileName) {
  if (response.status === 200) {
    return response.blob().then((text) => {
      FileSaver.saveAs(
        text,
        fileName ? fileName : "payroll_module_template.xlsx"
      );
    });
  } else {
    return response.text().then((text) => {
      const data = text && JSON.parse(text);
      if (!response.ok) {
        if (response.status === 401) {
          // toast.error('Something went wrong, Please try after some time');
        }
        const error = (data && data.message) || response.statusText;
        toast.error(error, { className: "red-circle" });
        return Promise.reject(error);
      } else {
        FileSaver.saveAs(text, "payroll_module_template.xlsx");
      }
    });
  }
}
