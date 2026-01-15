import Link from "next/link";

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left">
          <Link href="/login" className="inline-flex items-center text-gray-600 hover:text-gray-900 text-sm font-medium mb-8">
            ← Back to Login
          </Link>
        </div>
        
        <div className="bg-white shadow rounded-lg p-6 sm:p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms of Service</h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-4">
              Welcome to Suhaib's Mart. These terms and conditions outline the rules and regulations for the use of our website and services.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">Acceptance of Terms</h2>
            <p className="text-gray-600 mb-4">
              By accessing or using our website, you accept and agree to be bound by these Terms of Service and our Privacy Policy. If you disagree with any part of these terms, you may not access our website.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">Use License</h2>
            <p className="text-gray-600 mb-4">
              Unless otherwise stated, Suhaib's Mart and/or its licensors own the intellectual property rights for all material on Suhaib's Mart. All intellectual property rights are reserved. You may access this from Suhaib's Mart for your own personal use subjected to restrictions set in these terms and conditions.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">User Responsibilities</h2>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li>You must not republish material from Suhaib's Mart</li>
              <li>You must not sell, rent, or sub-license material from Suhaib's Mart</li>
              <li>You must not reproduce, duplicate, or copy content from Suhaib's Mart</li>
              <li>You must not engage in any data mining or similar extraction activities</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">Disclaimer</h2>
            <p className="text-gray-600 mb-4">
              The materials on Suhaib's Mart are provided on an 'as is' basis. Suhaib's Mart makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">Governing Law</h2>
            <p className="text-gray-600 mb-4">
              These terms shall be governed and construed in accordance with the laws of [Your Country/Region], without regard to its conflict of law provisions.
            </p>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;