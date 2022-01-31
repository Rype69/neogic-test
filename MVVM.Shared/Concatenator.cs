namespace MVVM.Shared
{
    public class Concatenator
    {
        /// <summary>
        /// TODO: [Complete]
        /// </summary>
        /// <param name="values">TODO: [Complete]</param>
        /// <returns>TODO: [Complete]</returns>
        public static string Concatenate(params string[] values)
        {
            // TODO: Validate "values" parameter.

            var result = string.Empty;
            foreach (var value in values)
            {
                // TODO: validate "value"?
                result += value;
            }

            return result;
        }
    }
}
