import { useState } from 'react';

import SearchInput from '../SearchInput';

export default function SearchForm({ className = '' }) {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className={`w-full max-w-6xl py-5 lg:py-0 ${className}`}>
      <form className="w-full relative mt-8 flex rounded-full shadow-xl dark:shadow-2xl bg-white dark:bg-neutral-800">
        <SearchInput
          defaultValue={searchValue}
          onChange={(value) => setSearchValue(value)}
        />
      </form>
    </div>
  );
}
