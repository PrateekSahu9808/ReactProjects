export const LOGO ="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR =
  "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e";

  export const API_OPTIONS={
    method:'GET',
    headers:{
      accept:"application/json",
     Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
      
    }
  }

  export const IMG_CDN_URL="https://image.tmdb.org/t/p/w780"

  export const BG_URL="https://assets.nflxext.com/ffe/siteui/vlv3/df6621a3-890c-4ca0-b698-90bd5152f3d1/20a59be7-7062-4991-bca0-805e9a7f2716/IN-en-20240107-trifectadaily-perspective_alpha_website_large.jpg"

  export const SUPPORTED_LANGUAGE= [{identifier:"en",name:"english"},{identifier:"hindi",name:"hindi"},{identifier:"spanish",name:"spanish"}]

  export const OPENAI_KEY=process.env.REACT_APP_OPENAI_KEY;