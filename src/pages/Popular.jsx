import React, { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Repo from '../components/Repo';
import Spinner from '../components/Spinner';
import SelectedLang from '../components/SelectLang';
import { getPopularRepo } from '../api';

export default function Popular() {
  const [searchParams, setSearchParams] = useSearchParams({ lang: 'All' });
  const [repos, setRepos] = useState({ loading: true, items: [] });
  const lang = searchParams.get('lang');

  useEffect(() => {
    getPopularRepo(lang)
      .then((repositories) =>
        setRepos({ loading: false, items: repositories.items })
      )
      .catch((err) => console.log(err));
  }, [lang]);

  const selectLang = useCallback(
    (selectedLang) => {
      setSearchParams({ lang: selectedLang });
      setRepos({ loading: true, items: [] });
    },
    [setSearchParams]
  );

  return (
    <main>
      <SelectedLang
        selectLang={selectLang}
        selectedLang={lang}
        loading={repos.loading}
      />
      {!repos.loading ? <Repo items={repos.items} /> : <Spinner />}
    </main>
  );
}
