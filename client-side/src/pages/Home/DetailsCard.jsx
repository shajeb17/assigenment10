import { CheckCircle, Brain, Heart, Clock } from "lucide-react";

const WhyBuildHabits = () => {
  return (
    <section className="bg-[#f5f7ff] darkmode:bg-base-100 py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
     
        <h2 className="text-4xl font-bold text-gray-800 darkmode:text-white ">
          Why Build <span className="text-purple-600">Habits?</span>
        </h2>
        <p className="text-gray-600 mt-3 text-lg max-w-2xl mx-auto darkmode:text-white/80 ">
          Habits shape your daily routine and define your long-term success.
          Here’s how building good habits can improve your life.
        </p>

      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
            <Brain className="w-12 h-12 text-purple-600 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">
              Better Focus
            </h3>
            <p className="text-gray-700 text-sm mt-3 leading-relaxed">
              Strong habits reduce distractions and keep your mind organized.
              This allows you to stay focused longer, complete tasks faster, and
              avoid mental fatigue throughout the day.
            </p>
          </div>

       
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
            <Heart className="w-12 h-12 text-pink-500 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">
              Reduced Stress
            </h3>
            <p className="text-gray-700 text-sm mt-3 leading-relaxed">
              When you follow a routine, you worry less about what to do next.
              Habit-building creates structure in your life, helping reduce
              anxiety, confusion, and decision overload.
            </p>
          </div>

      
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
            <Clock className="w-12 h-12 text-blue-500 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">
              Time Management
            </h3>
            <p className="text-gray-700 text-sm mt-3 leading-relaxed">
              Good habits allow you to use your time wisely by automating
              important activities. You waste less time thinking and more time
              achieving your goals effectively.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
            <CheckCircle className="w-12 h-12 text-green-500 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">
              Consistency
            </h3>
            <p className="text-gray-700 text-sm mt-3 leading-relaxed">
              Success doesn’t come from big decisions — it comes from small,
              repeated actions. Habits help you stay consistent so your progress
              becomes automatic and unstoppable over time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBuildHabits;
