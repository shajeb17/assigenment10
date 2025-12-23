import React from "react";

const Story = () => {
  return (
    <section className="bg-blue-50 py-8 darkmode:bg-base-100 ">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 darkmode:text-white mb-12">
          Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <p className="text-gray-700 italic mb-6">
              “Before Habitify, I struggled with managing my time effectively
              and often felt overwhelmed. But the app has helped me create a
              well-structured routine and stick to it. I've improved my
              productivity, and I feel more balanced and in control. It's made a
              big difference in both my professional and personal life.”
            </p>
            <div className="flex items-center">
              <img
                src="https://randomuser.me/api/portraits/women/68.jpg"
                alt="story user"
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="font-semibold text-gray-800">
                  Jennifer Ellison
                </h4>
                <p className="text-gray-400 text-sm">Product Manager</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <p className="text-gray-700 italic mb-6">
              “Habitify is a game-changer for me. I've been able to set fitness
              goals and maintain consistency, all while tracking my progress.
              The app not only tracks my habits but also motivates me to keep
              going. Now, I've achieved my fitness goals faster than I ever
              thought possible.”
            </p>
            <div className="flex items-center">
              <img
                src="https://randomuser.me/api/portraits/men/75.jpg"
                alt="story user"
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="font-semibold text-gray-800">Thomas Maxwell</h4>
                <p className="text-gray-400 text-sm">Fitness Enthusiast</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
