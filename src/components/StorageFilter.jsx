import React from 'react'

function StorageFilter() {
  return (
    <>
      <h3>Storage</h3>
      <div>
        <div>
          <input type="checkbox" name="storageSize[]" id="32" />
          <label htmlFor="32">32GB</label>
        </div>
        <div>
          <input type="checkbox" name="storageSize[]" id="64" />
          <label htmlFor="64">64GB</label>
        </div>
        <div>
          <input type="checkbox" onSelect={() => console.log('Hey')} name="storageSize[]" id="128" />
          <label htmlFor="128">128GB</label>
        </div>
        <div>
          <input type="checkbox" name="storageSize[]" id="256" />
          <label htmlFor="256">256GB</label>
        </div>
      </div>
    </>
  )
}

export default StorageFilter
