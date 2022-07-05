import React, { useEffect } from 'react';
import './articles.css';
import { profileApi, contentApi } from '../../api';
import useApi from '../../hooks/useApi';

const Articles = () => {
  const {
    loading: profileLoading,
    data: profileData,
    error: profileError,
    request: profileRequest,
  } = useApi(profileApi.getProfile);

  const {
    loading: contentLoading,
    data: contentData,
    error: contentError,
    request: contentRequest,
  } = useApi(contentApi.getContentById);

  const pidCookie = document.cookie
    .split('; ')
    .find(row => row.startsWith('pid='))
    ?.split('=')[1];

  useEffect(() => {
    const profileId = pidCookie || profileData?.data?.profileId;
    if(profileId !== null && profileId !== undefined){
      contentRequest(profileId);
    }
  }, [profileData, contentRequest, pidCookie]);

  useEffect(() => {
    if (!pidCookie) {
      profileRequest();
    }
  }, [profileRequest, pidCookie]);

  if (profileLoading || contentLoading) {
    return <div className="loading">Loading...</div>;
  }

  if (profileError) {
    return <div className="error">There was an error fetching profile</div>;
  }

  if(contentError){
    return <div className="error">There was an error fetching content</div>
  }

  return (
    <div className={`articles ${contentData?.data?.theme}`}>
      <header>My Delicious Articles</header>
      {contentData && (
        <ul>
          {contentData.data.articles.map(article => {
            const { title, summary, href } = article;
            return (
              <li key={title}>
                <h2>
                  <a href={href}>{title}</a>
                </h2>
                <p>
                  <a href={href}>{summary}</a>
                </p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Articles;
