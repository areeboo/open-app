"use client";

import TestModalButton from '../components/testmodalbutton';

export default function NextPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        <h1 className="text-3xl font-bold text-center mb-12">Test Components</h1>
        
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Test Card */}
          <div className="card w-full md:w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Test Card</h2>
              <p>This is a test card using DaisyUI</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Learn More</button>
              </div>
            </div>
          </div>
  
          {/* Test Modal Section */}
          <div className="flex flex-col items-center w-full md:w-auto">
            <TestModalButton />
          </div>
        </div>
      </div>
  
      <dialog id="test_modal" className="modal">
        <div className="modal-box max-w-2xl">
          <h3 className="font-bold text-2xl">Test Modal</h3>
          <p className="py-6 text-lg">This is a test modal using DaisyUI</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-lg">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}