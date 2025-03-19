import React from 'react';
import { Download } from 'lucide-react';
import { Dialog, Transition } from '@headlessui/react';

interface AppDownloadDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AppDownloadDialog({ open, onOpenChange }: AppDownloadDialogProps) {
  return (
    <Transition show={open} as={React.Fragment}>
      <Dialog 
        as="div" 
        className="relative z-50"
        onClose={() => onOpenChange(false)}
      >
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-black/50 backdrop-blur-xl border border-white/10 p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title as="h3" className="text-xl font-semibold mb-2">
                  Download Flashoot App
                </Dialog.Title>
                <p className="text-sm text-gray-400 mb-6">
                  Get the full Flashoot experience on your mobile device.
                </p>
                <div className="space-y-4">
                  <a 
                    href="https://apps.apple.com/in/app/flashoot/id6504755078"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-left"
                  >
                    <Download className="h-5 w-5" />
                    <div>
                      <p className="text-xs text-gray-400">Download on the</p>
                      <p className="font-medium">App Store</p>
                    </div>
                  </a>
                  <a 
                    href="https://play.google.com/store/apps/details?id=com.flashoot.user&hl=en&pli=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-left"
                  >
                    <Download className="h-5 w-5" />
                    <div>
                      <p className="text-xs text-gray-400">Get it on</p>
                      <p className="font-medium">Google Play</p>
                    </div>
                  </a>
                </div>
                <div className="mt-6 flex justify-end">
                  <button
                    onClick={() => onOpenChange(false)}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}